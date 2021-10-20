<?php namespace App\Controllers;

use CodeIgniter\HTTP\RequestInterface;

class View extends \CodeIgniter\Controller
{

	protected $session;
	protected $request;

  function __construct(RequestInterface $request)
  {
      $this->session = session();
			$this->now = date('Y-m-d H:i:s');
			$this->request = $request;
      		$this->logged = $this->session->get('logged_in');
			$this->data = array(
				'version' => \CodeIgniter\CodeIgniter::CI_VERSION,
				'baseURL' => BASE.'/public',
				// 'baseURL' => BASE,
				'userid' => $this->session->get('user_id'),
				'username' => $this->session->get('user_name'),
				'role' => $this->session->get('user_role'),
			);
  }

	public function index()
	{

			return redirect('login');
	}

	public function Maps()
	{

			helper('form');
			$this->data['script'] = $this->data['baseURL'].'/action-js/maps/index.js';
			return \Twig::instance()->display('maps/index.html', $this->data);
	}

}
